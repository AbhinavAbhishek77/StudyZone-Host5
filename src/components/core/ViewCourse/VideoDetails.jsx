
import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { BigPlayButton, Player } from "video-react"
import { markLectureAsComplete } from "../../../services/operations/courseDetailsAPI"
import { updateCompletedLectures } from "../../../slices/viewCourseSlice"
import IconBtn from "../../Common/IconBtn"

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams()
  const navigate = useNavigate()
  const playerRef = useRef(null)
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse)

  const [videoData, setVideoData] = useState(null)
  const [videoEnded, setVideoEnded] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (courseSectionData.length) {
      const section = courseSectionData.find((sec) => sec._id === sectionId)
      const subSection = section?.subSection.find((sub) => sub._id === subSectionId)
      setVideoData(subSection)
    }
  }, [courseSectionData, sectionId, subSectionId])

  const isFirstVideo = () => sectionId === courseSectionData[0]._id && subSectionId === courseSectionData[0].subSection[0]._id
  const isLastVideo = () => sectionId === courseSectionData[courseSectionData.length - 1]._id &&
    subSectionId === courseSectionData[courseSectionData.length - 1].subSection.slice(-1)[0]._id

  const navigateToVideo = (next = true) => {
    const sectionIndex = courseSectionData.findIndex((sec) => sec._id === sectionId)
    const subIndex = courseSectionData[sectionIndex].subSection.findIndex((sub) => sub._id === subSectionId)

    const isNextSubAvailable = next && subIndex < courseSectionData[sectionIndex].subSection.length - 1
    const isPrevSubAvailable = !next && subIndex > 0

    if (isNextSubAvailable) {
      navigate(`/view-course/${courseId}/section/${sectionId}/sub-section/${courseSectionData[sectionIndex].subSection[subIndex + 1]._id}`)
    } else if (isPrevSubAvailable) {
      navigate(`/view-course/${courseId}/section/${sectionId}/sub-section/${courseSectionData[sectionIndex].subSection[subIndex - 1]._id}`)
    } else {
      const newSectionIndex = next ? sectionIndex + 1 : sectionIndex - 1
      const newSubIndex = next ? 0 : courseSectionData[newSectionIndex].subSection.length - 1
      navigate(`/view-course/${courseId}/section/${courseSectionData[newSectionIndex]._id}/sub-section/${courseSectionData[newSectionIndex].subSection[newSubIndex]._id}`)
    }
  }

  const handleLectureCompletion = async () => {
    setLoading(true)
    const res = await markLectureAsComplete({ courseId, subsectionId: subSectionId }, token)
    if (res) dispatch(updateCompletedLectures(subSectionId))
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-5 text-white">
      {videoData ? (
        <Player ref={playerRef} aspectRatio="16:9" playsInline src={videoData.videoUrl} onEnded={() => setVideoEnded(true)}>
          <BigPlayButton position="center" />
          {videoEnded && (
            <div className="absolute inset-0 z-[100] grid place-content-center">
              {!completedLectures.includes(subSectionId) && (
                <IconBtn disabled={loading} onclick={handleLectureCompletion} text={loading ? "Loading..." : "Mark As Completed"} />
              )}
              <IconBtn onclick={() => { playerRef.current?.seek(0); setVideoEnded(false) }} text="Rewatch" />
              <div className="mt-10 flex gap-x-4 text-xl">
                {!isFirstVideo() && <button onClick={() => navigateToVideo(false)} className="blackButton">Prev</button>}
                {!isLastVideo() && <button onClick={() => navigateToVideo(true)} className="blackButton">Next</button>}
              </div>
            </div>
          )}
        </Player>
      ) : (
        <img src={courseEntireData.thumbnail} alt="Preview" className="h-full w-full rounded-md object-cover" />
      )}
      <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
      <p className="pt-2 pb-6">{videoData?.description}</p>
    </div>
  )
}

export default VideoDetails

import React, { useEffect, useState } from 'react'
import { FastForward, Play, Rewind, Pause } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSong } from '../services/api'
const Song = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const activesong = (parseInt(id))
  const [play, setPlay] = useState(true)
  const [prev, setPrev] = useState(true)
  const [next, setNext] = useState(true)
  const [song, setSong] = useState({
    title: "",
    album: "",
    artist: "",
    year: 0,
    coverurl: ""
  })
  const handlePlay = () => {
    setPlay(!play)
  }
  const handlePrev = () => {
    if (activesong > 1) {
      setNext(true)
      navigate(`/song/${(activesong + -1)}`)
    }
    else {
      setPrev(false)
    }
  }
  const handleNext = () => {
    if (activesong < 4) {
      setPrev(true)
      navigate(`/song/${(activesong + 1)}`)
    }
    else {
      setNext(false)
    }
  }
  const fetchSongData = async () => {
    const res = await getSong(id)
    setSong(res.data)
  }

  useEffect(() => {
    fetchSongData()
  }, [id])

  return (
    <>
      <div className='h-screen w-full flex flex-col justify-center items-center p-10'>
        <div className='w-full h-1/2 flex flex-col items-center justify-center gap-6'>
          <img src={song.coverurl} alt="thumb" className='h-80 w-80 rounded-md shadow-lg ' />
          <div className='w-80 h-20 flex flex-row justify-evenly items-center'>
            {
              prev ?
                <button>
                  <Rewind onClick={handlePrev} className='cursor-pointer hover:text-orange-500' />
                </button>
                :
                <Rewind className='cursor-not-allowed hover:text-orange-200 text-slate-400' />
            }
            <button onClick={handlePlay} className='cursor-pointer hover:text-orange-500'>
              {play ?
                <Pause />
                :
                <Play />
              }
            </button>
            {
              next ?
                <button>
                  <FastForward onClick={handleNext} className='cursor-pointer hover:text-orange-500' />
                </button>
                :
                <FastForward className='cursor-not-allowed hover:text-orange-200 text-slate-400' />
            }
          </div>
          <div className='w-80 h-20 flex flex-row justify-evenly items-center mb-4 text-orange-500 text-2xl font-bold'>
            <marquee>
              {song.title}
            </marquee>
          </div>
        </div>
        <div className='w-[80%] h-auto bg-slate-50'>
          <table className='border-2 border-collapse w-full h-auto rounded-lg shadow-lg'>
            <thead className='border-b-2 font-bold text-orange-400'>
              <tr className='border-2'>
                <th className='p-2 w-4/12'>Album</th>
                <th className='p-2 w-4/12'>Artist</th>
                <th className='p-2 w-4/12'>Year</th>
              </tr>
            </thead>
            <tbody className='border-2 text-center'>
              <tr>
                <td className='p-2'>
                  {song.album}
                </td>
                <td className='p-2'>
                  {song.artist}
                </td>
                <td className='p-2'>
                  {song.year}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default Song
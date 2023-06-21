import styles from './card.module.css';
import './transitions.css';
import { CardProps } from '@/types';
import Image from 'next/image';
import { FiMonitor } from 'react-icons/fi';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import Link from 'next/link';
import {
  FaCamera,
  FaMobileAlt,
  FaWifi,
  FaLock,
  FaPalette,
  FaVolumeUp,
  FaBatteryFull,
  FaSimCard,
  FaMicrophoneAlt,
  FaBolt,
} from 'react-icons/fa';
import { GiBattery100 } from 'react-icons/gi';
import { HiOutlineDatabase } from 'react-icons/hi';
import { BsMemory, BsCardImage } from 'react-icons/bs';
import { MdGpsFixed } from 'react-icons/md';

export default function Card({ onClick, data }: CardProps): JSX.Element {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardBack}>
        {/* inside container */}
        <div className='relative overflow-x-hidden overflow-y-scroll w-full h-auto text-left'>
          <h1 className='text-2xl'>Product Excerpt</h1>
          <div className='flex flex-col gap-2 mb-4 mt-2'>
            <p>
              3dView: <span className='text-sm text-green-500'>is Active</span>
            </p>
            <Link href={`${data.scene}`}
              className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
              Go to Scene
            </Link>
          </div>
          <ul className='text-sm'>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FiMonitor size={17} />
              </i>{' '}
              Display: High-resolution screen
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <AiOutlineThunderbolt size={17} />
              </i>{' '}
              Processor: Fast and efficient chipset
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaCamera size={17} />
              </i>{' '}
              Camera: High-quality rear and front cameras
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <GiBattery100 size={17} />
              </i>{' '}
              Battery: Long-lasting battery life
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <HiOutlineDatabase size={17} />
              </i>{' '}
              Storage: Ample internal storage capacity
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <BsMemory size={17} />
              </i>{' '}
              RAM: Sufficient memory for smooth performance
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaMobileAlt size={17} />
              </i>{' '}
              Operating System: Latest OS version
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaWifi size={17} />
              </i>{' '}
              Connectivity: 4G/5G network support
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaLock size={17} />
              </i>{' '}
              Biometric Security: Fingerprint or face recognition
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <BsCardImage size={17} />
              </i>{' '}
              Expandable Storage: Option to add external memory
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaPalette size={17} />
              </i>{' '}
              Design: Sleek and modern aesthetics
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaVolumeUp size={17} />
              </i>{' '}
              Audio: High-quality speakers and headphone jack
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaBatteryFull size={17} />
              </i>{' '}
              Wireless Charging: Capability for wireless charging
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaBatteryFull size={17} />
              </i>{' '}
              NFC: Support for contactless payments
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaSimCard size={17} />
              </i>{' '}
              Dual SIM: Ability to use two SIM cards
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <MdGpsFixed size={17} />
              </i>{' '}
              GPS: Accurate navigation and location services
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaMicrophoneAlt size={17} />
              </i>{' '}
              Voice Assistant: Integration with virtual assistants
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaBolt size={17} />
              </i>{' '}
              Quick Charging: Rapid charging technology
            </li>
            <li className='flex items-center gap-3'>
              <i className='icon-class'>
                <FaBatteryFull size={17} />
              </i>{' '}
              Screen Size: Large display for immersive experience
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.cardFront}>
        <div className='relative w-full h-full '>
          <Image src={data.img} fill={true} alt='Picture of the author' />
        </div>
        {data.title}
        <p className='text-sm textgray-400 py-4'>You can Flip the card</p>
      </div>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link';
import PageHero from '../components/page-hero';

export default function Workshops() {

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 wrapper-7 mb-32">
        <PageHero title="Speakers" subtitle="Meet our distinguished speakers for BSides SWFL 2025." />
        <p className='text-center text-amber-200 font-semibold md:mt-[30%] lg:mt-[22%] xl:mt-[15%] 2xl:mt-[22%]'>We are excited to announce our Call for Workshop Proposals for the upcoming BSides SWFL cybersecurity conference! We invite passionate professionals, educators, and enthusiasts to share their expertise by leading hands-on workshops that engage and inspire our diverse community. Whether you’re an experienced instructor or presenting for the first time, this is a great opportunity to help others learn new skills, explore emerging topics, and foster collaboration in a friendly, supportive environment. <Link className='text-teal-500 hover:text-teal-700' href='/contactus'>Submit your workshop idea</Link> and help us make this year’s event an unforgettable learning experience for all!</p>

        <div className="text-center mt-12">
          <a href='/workshops-form'>
            <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto">
              Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
            </button>
          </a>
        </div>
      </main>
    </>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import dotenv from 'dotenv';
import Link from 'next/link';

export default function Villages() {

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 wrapper-7 mb-32">
        <h1 className="text-4xl font-bold mt-20 mb-6 text-center text-teal-700">Villages</h1>
        <p className='text-center text-amber-200 font-semibold md:mt-[30%] lg:mt-[22%] xl:mt-[15%] 2xl:mt-[22%]'>We are excited to open our Call for Villages Proposals for the upcoming BSides SWFL cybersecurity conference! Villages are interactive spaces dedicated to hands-on learning, collaboration, and exploration of specialized topics within cybersecurity. We invite individuals, groups, and organizations to propose and lead unique village experiences—whether focused on hardware hacking, lockpicking, or any other area that sparks curiosity and engagement. Help us create dynamic spaces where attendees can connect, experiment, and deepen their skills. <Link className='text-teal-500 hover:text-teal-700' href='/contactus'>Submit your village idea</Link> and be a part of what makes BSides truly special!</p>

        <div className="text-center mt-12">
          <a href='/contactus'>
            <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto">
              Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
            </button>
          </a>
        </div>
      </main>
    </>
  )
}

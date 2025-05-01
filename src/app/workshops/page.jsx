import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const workshops = [
  {
    id: 1,
    title: 'Network Security Basics',
    date: '2025-11-07',
    description: 'Learn the fundamentals of securing computer networks against common threats.'
  },
  {
    id: 2,
    title: 'Advanced Cryptography',
    date: '2025-11-07',
    description: 'Explore modern cryptographic techniques and their applications in cybersecurity.'
  },
  {
    id: 3,
    title: 'Security Automation with SIEM',
    date: '2025-11-07',
    description: 'Hands-on workshop on using Security Information and Event Management tools for automation.'
  },
  {
    id: 4,
    title: 'Building Secure Web Applications',
    date: '2025-11-08',
    description: 'Best practices for developing web applications with security in mind.'
  },
  {
    id: 5,
    title: 'Threat Hunting and Intelligence',
    date: '2025-11-08',
    description: 'Techniques for proactive threat hunting and gathering actionable intelligence.'
  },
  {
    id: 6,
    title: 'Incident Handling and Forensics',
    date: '2025-11-08',
    description: 'Learn how to handle security incidents and perform digital forensics investigations.'
  }
]

const Workshops = () => {
  return (
    <>
      <main className="max-w-5xl mx-auto  my-6 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Workshops</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshops.map(workshop => (
            <Card key={workshop.id}>
              <CardHeader>
                <CardTitle>{workshop.title}</CardTitle>
                <CardDescription>{workshop.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{workshop.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </>
  )
}

export default Workshops
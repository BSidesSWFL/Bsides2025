import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"

export default function SchedulePage() {
  // Sample schedule data
  const scheduleData = [
    {
      day: "Day 1 - November 7th",
      events: [
        { time: "8:00 AM - 9:00 AM", title: "Registration & Breakfast", location: "Main Hall" },
        { time: "9:00 AM - 10:00 AM", title: "Opening Keynote", location: "Auditorium" },
        { time: "10:15 AM - 11:15 AM", title: "Track 1: Web Security Fundamentals", location: "Room A" },
        { time: "10:15 AM - 11:15 AM", title: "Track 2: Cloud Security Challenges", location: "Room B" },
        { time: "11:30 AM - 12:30 PM", title: "Track 1: API Security", location: "Room A" },
        { time: "11:30 AM - 12:30 PM", title: "Track 2: Container Security", location: "Room B" },
        { time: "12:30 PM - 1:30 PM", title: "Lunch Break", location: "Dining Area" },
        { time: "1:30 PM - 2:30 PM", title: "Panel Discussion: Future of Cybersecurity", location: "Auditorium" },
        { time: "2:45 PM - 3:45 PM", title: "Track 1: Threat Hunting", location: "Room A" },
        { time: "2:45 PM - 3:45 PM", title: "Track 2: Secure Coding Practices", location: "Room B" },
        { time: "4:00 PM - 5:00 PM", title: "Networking Reception", location: "Main Hall" },
      ],
    },
    {
      day: "Day 2 - November 8th",
      events: [
        { time: "8:30 AM - 9:00 AM", title: "Breakfast", location: "Main Hall" },
        { time: "9:00 AM - 10:00 AM", title: "Day 2 Keynote", location: "Auditorium" },
        { time: "10:15 AM - 11:15 AM", title: "Track 1: Incident Response", location: "Room A" },
        { time: "10:15 AM - 11:15 AM", title: "Track 2: IoT Security", location: "Room B" },
        { time: "11:30 AM - 12:30 PM", title: "Track 1: Penetration Testing", location: "Room A" },
        { time: "11:30 AM - 12:30 PM", title: "Track 2: Security Automation", location: "Room B" },
        { time: "12:30 PM - 1:30 PM", title: "Lunch Break", location: "Dining Area" },
        { time: "1:30 PM - 2:30 PM", title: "Lightning Talks", location: "Auditorium" },
        { time: "2:45 PM - 3:45 PM", title: "Workshops (Various Topics)", location: "Multiple Rooms" },
        { time: "4:00 PM - 5:00 PM", title: "Closing Remarks & Prizes", location: "Auditorium" },
      ],
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Conference Schedule</h1>

        <div className="space-y-12">
          {scheduleData.map((day, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-6">{day.day}</h2>
              <div className="grid gap-4">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.time}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Location: {event.location}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
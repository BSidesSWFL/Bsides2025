import { Button } from "@/app/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/ui/card"

export default function TicketsPage() {
  const ticketTypes = [
    {
      name: "Early Bird",
      price: "$99",
      description: "Available until September 15th",
      features: [
        "Access to all conference sessions",
        "Conference swag bag",
        "Lunch and refreshments",
        "Access to networking events",
      ],
      highlight: true,
      student: false,
      general: false,
    },
    {
      name: "Regular",
      price: "$149",
      description: "September 16th - October 5th",
      features: [
        "Access to all conference sessions",
        "Conference swag bag",
        "Lunch and refreshments",
        "Access to networking events",
      ],
      highlight: false,
      student: false,
      general: true,
    },
    {
      name: "Student",
      price: "$49",
      description: "Valid student ID required",
      features: [
        "Access to all conference sessions",
        "Conference swag bag",
        "Lunch and refreshments",
        "Special networking session",
      ],
      highlight: false,
      student: true,
      general: false,
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 text-center">Conference Tickets</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us for two days of insightful talks, hands-on workshops, and networking opportunities with industry
          experts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketTypes.map((ticket, index) => (
            <Card key={index} className={ticket.highlight ? "border-purple-500 shadow-lg" : ""}>
              {ticket.highlight && (
                <div className="bg-purple-500 text-white text-center py-1 text-sm font-medium">BEST VALUE</div>
              )}


              {ticket.student && (
                <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">STUDENT DISCOUNT</div>
              )}



            {ticket.general && (
                <div className="bg-orange-300 text-white text-center py-1 text-sm font-medium">GENERAL ADMISSION</div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-center">{ticket.name}</CardTitle>
                <CardDescription className="text-center">{ticket.description}</CardDescription>
                <div className="text-3xl font-bold text-center mt-2">{ticket.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {ticket.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-500 hover:bg-red-600">Buy Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Group Discounts</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Planning to attend with your team? Contact us for special group rates for 5 or more attendees from the same
            organization.
          </p>
          <Button variant="outline" className="mt-4">
            Contact for Group Rates
          </Button>
        </div>
      </div>
    </>
  )
}
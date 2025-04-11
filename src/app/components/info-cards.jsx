import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfoCards() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sponsors Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Call for Sponsors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              TechSides Conference is organized by volunteers and relies on funding from industry sponsors and
              donations.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="bg-purple-800 hover:bg-purple-500 text-white">2025 Sponsor Kit</Button>
          </CardFooter>
        </Card>

        {/* Tickets Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Tickets On Sale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Early bird pricing is available until September 15th. Secure your spot today!
            </p>
          </CardContent>
          <CardFooter>
            <Button className="bg-purple-800 hover:bg-purple-500 text-white">Buy Now!</Button>
          </CardFooter>
        </Card>

        {/* Volunteer Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">We need your Help!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Come join the fun and help us make 2025 the best TechSides Conference ever.</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-purple-800 hover:bg-purple-500 text-white">Volunteer Information</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"

export default function SpeakersPage() {
  // Sample speakers data

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-teal-700 text-center">Conference Speakers</h1>
        <script type="text/javascript" src={`https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_KEY}/view/SpeakerWall`}></script>
      </div>
    </>
  )
}
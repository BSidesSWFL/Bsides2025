import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"

export default function SchedulePage() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-teal-700 text-center">Schedule</h1>
      <script type="text/javascript" src={`https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_KEY}/view/GridSmart`}></script>
    </div>
  );
}
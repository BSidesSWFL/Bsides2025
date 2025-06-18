import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const Workshops = () => {
  return (
    <>
      <main className="max-w-5xl mx-auto  my-6 p-4">
        <h1 className="text-4xl font-bold mb-8 text-teal-700 text-center">Workshops</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <script type="text/javascript" src={`https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_KEY}/view/Sessions`}></script>
        </section>
      </main>
    </>
  )
}

export default Workshops

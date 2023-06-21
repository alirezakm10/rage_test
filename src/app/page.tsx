import FlippableCard from "@/components/FlippableCard"

export default function Home() {
  const dummyData = [
    {
      img:'/iphone.png',
      title:"Iphone X",
      scene:"/products/scenes/iphone"
    },
    {
      img:'/samsungx.png',
      title:"Samsung X",
      scene:"/products/scenes/samsung"
    },
  ]
  return (
    <main className="app">
      {
        dummyData?.map((eachProduct, idx) => (
          <FlippableCard data={eachProduct} key={idx} />
        ))
      }
   
    </main>
  )
}

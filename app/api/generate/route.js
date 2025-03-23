import clientPromise from "@/lib/mongodb"


export async function POST(request) {

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")
    const body=await request.json()

    //check if the short url exists
    const doc=await collection.findOne({shortUrl:body.shortUrl})
    if(doc){
      return Response.json({success:false,error:true, message: 'URL Already Exists!' })
    }
    
    await collection.insertOne({
      url:body.url,
      shortUrl:body.shortUrl
    })
    return Response.json({success:true,error:false, message: 'URL Generated Successfully' })
  }
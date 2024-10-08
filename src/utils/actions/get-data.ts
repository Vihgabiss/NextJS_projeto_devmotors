export async function getDataHome() {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66d9e7ac25a33cd032f07777?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`)
    
        if(!res.ok){
            throw new Error("Failed to fetch data")
        }

        return res.json();
        
    }catch(err){
        throw new Error("Failed to fetch data")
    }
}
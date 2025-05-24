export async function fetchstocks(){
    const response = await fetch('https://20.244.56.144/evaluation-service/stocks');
    if(!response.ok){
        throw new Error('Failed to fetch stocks');
    }
    return response.json();
}
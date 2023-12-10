import express from 'express';

const app = express();

const jokes = [
    {
        id:1,
        title: "Joke-1",
        content: "Good Joke!"
    },
    {
        id:2,
        title: "Joke-2",
        content: "Bad Joke!"
    },
    {
        id:3,
        title: "Joke-3",
        content: "Average Joke!"
    },
    {
        id:4,
        title: "Joke-4",
        content: "Excellent Joke!"
    }
]

app.get('/',(req,res)=>{
    res.send('SERVER IS READY');
});

app.get('/api/jokes',(req,res)=>{
    // res.set('Access-Control-Allow-Origin', '*');
    res.send(jokes)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Serving at http://localhost:${port}`)
});
const express = require('express')
const app = express()
const port = 4000 // 포트번호 지정
const cors = require('cors')
app.use(cors())
app.use(express.json())
const axios = require('axios');

let data = []
async function getPlayer() {
    try {
        const response = await axios.get('https://gist.githubusercontent.com/audrhks29/0dadcb9679a74e25b8e7d386bc92d756/raw/0a8ccaba6b773a4d59108177c0642e541c1b875e/playerData.json');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

app.get('/playerInfo', async (req, res) => {
    try {
        data = await getPlayer();
        console.log("시도중");
        res.send(data);
    } catch (error) {
        res.status(500).send('서버 에러');
    }
});

app.delete('/playerInfo/:id', (req, res) => {
    const no = req.params.id
    data = data.filter(x => x.id !== Number(no))
    res.send(data)
})

app.put('/playerInfo/:id', (req, res) => {
    const playerId = req.params.id;
    const newData = req.body; // 요청의 바디에서 새로운 데이터를 가져옵니다.
    console.log(newData);
    // 데이터에서 해당 ID의 플레이어를 찾습니다.
    const playerIndex = data.findIndex(x => x.id === Number(playerId));
    if (playerIndex !== -1) {
        // 해당 ID를 가진 플레이어를 찾은 경우 새로운 데이터로 업데이트합니다.
        data[playerIndex] = { ...data[playerIndex], ...newData };
    }

    res.send(data);
})

app.listen(port, () => {
    console.log(`${port} 서버 실행중...`);
})
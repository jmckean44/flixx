import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Root route
app.get('/', (req, res) => {
	res.send('Welcome to the Flixx API!');
});

// Proxy route to TMDB API
app.get('/api/:endpoint', async (req, res) => {
	const endpoint = req.params.endpoint;
	const query = new URLSearchParams(req.query).toString();
	const apiKey = process.env.TMDB_API_KEY;

	try {
		const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}&${query}`);
		const data = await response.json();
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch data from TMDB API' });
	}
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

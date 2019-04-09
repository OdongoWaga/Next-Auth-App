const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

const authenticate = async (email, password) => {};

app.prepare().then(() => {
	const server = express();

	server.use(express.json());
	server.post("/api/login", (req, res) => {
		const { email, password } = req.body;
		authenticate(email, password);
		res.json({
			email,
			password,
			success: true
		});
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`Listening on PORT ${port}`);
	});
});

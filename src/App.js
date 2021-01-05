import "./App.scss";

// Data hardcoded
let days;
let hours;
let minutes;
let seconds;

let date = new Date("Sep 23 2022 00:00:00");
let now = new Date("Sep 23 2021 00:00:00");

const getIntervalTime = (startDate, endDate) => {
	let secondsInterval = Math.floor((endDate - startDate) / 1000);
	return secondsInterval;
};

const getDaysHoursMinutesSeconds = (interval) => {
	days = Math.floor(interval / (24 * 60 * 60));
	hours = Math.floor((interval % (24 * 60 * 60)) / (60 * 60));
	minutes = Math.floor((interval % (60 * 60)) / 60);
	seconds = Math.floor((interval % 60) / 1);
	return (interval = {
		d: days,
		h: hours,
		m: minutes,
		s: seconds,
	});
};

const countdown = (n) => {
	return n - 1;
};

function App() {
	let intervalDate;
	let intervalSeconds;

	intervalSeconds = getIntervalTime(now, date);
	let { d, h, m, s } = getDaysHoursMinutesSeconds(intervalSeconds);
	setInterval(() => {
		intervalSeconds = countdown(intervalSeconds);
		intervalDate = getDaysHoursMinutesSeconds(intervalSeconds);
		d = document.getElementById("d1").innerText = intervalDate.d;
		d = document.getElementById("d2").innerText = intervalDate.d;
		h = document.getElementById("h1").innerText = intervalDate.h;
		h = document.getElementById("h2").innerText = intervalDate.h;
		m = document.getElementById("m1").innerText = intervalDate.m;
		m = document.getElementById("m2").innerText = intervalDate.m;
		s = document.getElementById("s1").innerText = intervalDate.s;
		s = document.getElementById("s2").innerText = intervalDate.s;
	}, 1000);

	return (
		<section className='App'>
			<div className='main-container'>
				<h3>We're launching soon</h3>
				<div className='date-container'>
					<div className='single-card'>
						<h1 id='d1' className='card dark'>
							{d}
						</h1>
						<h1 id='d2' className='card light'>
							{d}
						</h1>

						<h3 className='date-label'>Days</h3>
					</div>
					<div className='single-card'>
						<h1 id='h1' className='card dark'>
							{h}
						</h1>
						<h1 id='h2' className='card light'>
							{h}
						</h1>

						<h3 className='date-label'>Hours</h3>
					</div>
					<div className='single-card'>
						<h1 id='m1' className='card dark'>
							{m}
						</h1>
						<h1 id='m2' className='card light'>
							{m}
						</h1>

						<h3 className='date-label'>Minutes</h3>
					</div>
					<div className='single-card'>
						<h1 id='s1' className='card dark'>
							{s}
						</h1>
						<h1 id='s2' className='card light'>
							{s}
						</h1>

						<h3 className='date-label'>Seconds</h3>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;

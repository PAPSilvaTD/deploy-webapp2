import React from 'react';
import './App.css';

function App() {
  return (
    <>
		<h1>Movies</h1>
		<ul>
			<li>
				<a href="https://www.imdb.com/find?q=lord+of+the+rings&ref_=nv_sr_sm">LOTR</a>
				<ul>
					<li>
						<a
							href="https://www.imdb.com/title/tt0120737/?ref_=fn_al_tt_1">Fellowship of the Ring</a>
					</li>
					<li>
            <a href="https://www.imdb.com/title/tt0120737/?ref_=fn_al_tt_1">The Two Towers</a>
					</li>
					<li>
						<a href="https://www.imdb.com/title/tt0120737/?ref_=fn_al_tt_1">Return of the King</a>
					</li>
				</ul>
			</li>
			<li>
				Twilight: cannot link to weak plots
			</li>
		</ul>
    </>
  );
}

export default App;

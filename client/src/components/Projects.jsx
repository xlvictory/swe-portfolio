import React from "react";
import SideNav from "./SideNav";

export default function Projects() {
    return (
        <>
        {/* The Upper Portion of the webpage */}
        <div id='header'>
            <div id="greeting">
                <h1><b><span>Pro</span><span>jec</span>ts⋆<span>*`</span></b></h1>
            </div>                   
            <div id='sidebar'><SideNav /></div>
        </div>

    {/* Carousel of Technical Projects */}
        <h3 style={{ textAlign: "center", color: "whitesmoke", font: "100 35px 'Rubik Scribble'", margin: "20px", textShadow: "0px 0px 8px #3ee8ff", textDecoration: "line-through" }}>Technical Projects</h3>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/C-A-D.png" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
        <p><h4>Ctrl-Alt-Divas Game</h4>A 2D auto-runner game with characters inspired by the developers. Players help characters gain points and eradicate bugs while utilizing character abilities to strive for top 10 player status on the leaderboard.</p>
        <a href="https://ctrl-alt-divas-game.onrender.com/">↪ Deployed Link</a>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/svt.png" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
        <p><h4>SEVENTEEN: Right Here</h4>An informational fan page for the South Korean pop group, SEVENTEEN. Includes all of the group’s information– such as awards, member profiles, discography, etc– and a “fanclub” so fans can interact amongst one another.</p>
        <a href="https://kimpbapi-kidding.onrender.com/">↪ Deployed Link</a>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/bookbuddy.png" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <p><h4>Book Buddy</h4>An online catalog of books that users can utilize to create a personal library. Users have the ability to register an account, check out books and view available books.</p>
        <a href="https://book-buddy-project.netlify.app">↪ Deployed Link</a>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/tumblr.png" alt="Fourth slide"/>
      <div class="carousel-caption d-none d-md-block">
        <p><h4>My Tumblr Theme</h4>This is a theme that I have created for my personal Tumblr, where I blog about beauty, horror, music and memes. Each page on the blog has different styling.</p>
        <a href="https://www.fluffypeen.tumblr.com">↪ Live Link</a>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

{/* Carousel of non-development Projects */}
<h3 style={{ textAlign: "center", color: "whitesmoke", font: "100 35px 'Rubik Scribble'", margin: "20px", textShadow: "0px 0px 8px #3ee8ff", textDecoration: "line-through", padding: "20px" }}>Personal Projects</h3>

<div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/makeup.jpeg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
        <p><h4>Makeup</h4>I have a creative eye and like to do graphic/editorial type makeup for fun!! I love to express myself through my makeup looks and help others feel and embody their most beautiful selves.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/painting.jpeg" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
        <p><h4>Surrealism Painting Project</h4>This was a college art assignment where we had to replicate a painting from a surrealism artist and add our own twist. This is my replica of “The Butterfly Apple” by Salvador Dali. My personal twist on my project was my material. I had no black paint, and the black pigment I tried to create fell through. Instead, I used liquid eyeliner and an acrylic mixing medium and painted with that.It’s personally one of my favorite art projects to date.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/soundcloud.png" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <p><h4>Soundcloud/Music Creation</h4>I am currently trying again with music. I had an old Soundcloud account that held all of my music (originals and covers), but one day I let my inner critic win and erased everything, including the account. I've recently rebuilt my studio, and am in the process of making music again. However, I couldn't leave you empty handed!! So I've attached a very short clip of one of my covers. It was recorded in 2014 on my Android phone with shoddy earbuds at 3AM, so please take that into consideration as it also lacks mixing/mastering. More music COMING SOON!!</p>
        <a href="https://www.soundcloud.com/xvfifteen">↪ Soundcloud Page</a><a href="https://drive.google.com/file/d/0Bx7mJaJPJWUtdWFCWUx3Zl83VzA/view?usp=sharing&resourcekey=0-mMgK4plBVneYBGXVXbIXLw">↪ Raw Cover</a>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div>
		<footer>
			Email: <br />
			xolani.victory@gmail.com<br />
			Phone #:<br />
			+1(209)425-5090 <br />
			<p style={{ textAlign: "left", background: "none"}}>
                    <a href="http://www.linkedin.com/in/xolanivictory">
                        <img src="/linkedin.png" style={{ height: "30px" }}/>
                    </a>
                    <a href="http://www.github.com/xlvictory"><img src="/github.png" style={{ height: "35px" }}/></a>
                </p>
		</footer>
	</div>
        </>
    )
}
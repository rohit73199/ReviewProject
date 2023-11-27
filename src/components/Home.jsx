import React from "react";
import NavBar1 from "./NavBar1";
import { Link } from "react-router-dom";
import "./Home.css";
import { Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
const Home = () => {
  return (
    <div>
      <NavBar1></NavBar1>
      <div className="line"></div>
      <div className="postnavbar">
        <Link>
          <p className="postnavbar" href="//">
            ADOPT OR GET INVOLVED
          </p>
        </Link>
        <Link>
          <p className="postnavbar">DOG AND PUPPIES</p>
        </Link>
        <Link>
          <p className="postnavbar">CATS AND KITTENS</p>
        </Link>
        <Link>
          <p className="postnavbar">OTHER PETS</p>
        </Link>
      </div>
      <div className="proj">
        <div className="mycont">
          <Typography
            variant="h3"
            textAlign={"center"}
            fontFamily={"Oswald"}
            color={"white"}
          >
            Find Your New Best Friend
          </Typography>
          <SearchBar />
          <div className="middlepage">
            <div className="middle1"></div>
            <div className="middle2"></div>
            <div className="middle3"></div>
          </div>
        </div>
      </div>
      <div className="preoverview">
        <h1>Pets Available For Adoption Nearby</h1>
      </div>
      <div className="overview">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rover.com%2Fblog%2Fbreeds%2Fgerman-shepherd%2F&psig=AOvVaw1skxDMTyj8QYcHLbUXoMhU&ust=1701148995319000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiQ9oq444IDFQAAAAAdAAAAABAI"
              alt="German Shepard"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              German Shepard
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size.
             
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="data:image/jpeg;base64,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"
              alt="Doberman"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Doberman
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Dobermann is a German breed of medium-large domestic dog of pinscher type.
              It was originally bred in Thuringia in about 1890 .
           
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshih-tzu&psig=AOvVaw33rFvP6-pzEFBR65Q0jnpG&ust=1701146432318000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOjY0Leu44IDFQAAAAAdAAAAABAJ"
              alt="Shih Tzu"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Shih Tzu
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Shih Tzu is a small, loyal, and playful dog breed with a 
              long, luxurious coat, and an affectionate personality
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
        
      </div>
      <div className="overview">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thesprucepets.com%2Fpersian-cat-breed-5220970&psig=AOvVaw2mpBBSMtElTYSab2b1Z_dj&ust=1701146712604000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCYhL2v44IDFQAAAAAdAAAAABAE"
              alt="Percian cat"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Percian cat
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Persian cat, also known as the Persian longhair,
               is a long-haired breed of cat characterised by a round face and short muzzle.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRPsYQsI4cigJlVQFi1doXHg0coxF6RNRkgCgNlwcrXaajmJh4OS0DliXKIE_wJLiAgVRjhX2Rp9BSUyk5MmQpy3gjYmy6RNTKudshE9HmEV6S8gTVqcyimjZzS1vu3GBoIjQYILDlc"
              alt="Parrot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Parrot
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Parrots, also known as psittacines, are birds with a strong curved beak, upright stance, and clawed feet.
               
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcockatiel&psig=AOvVaw1XJo9TRITdYBQ3j_X9_49Z&ust=1701147059865000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj1r4Cx44IDFQAAAAAdAAAAABAD"
              alt="Cockatiel"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Cockatiel
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The cockatiel, also known as the quarrion, is a medium-sized parrot that is a member of its own branch of the cockatoo family.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
        
      </div>
      <div className="bottom">
        <div className="About">
          <h3>ABOUT US</h3>
          <p>
            <h3>
              {" "}
              You need in-home pet grooming, pet training, dog walking, pet
              insurance, pet relocation, or vet on call, PetShelter connects pet
              parents with pet care heroes who'll treat their pet like family.
              <br />
              We understand your pet is family. And you can trust us to keep
              your pet happy, healthy, and sweet as ever. But it's not just
              about pet love. PetShelter is also committed to making pet care
              safe, easy, and affordable so that everyone can experience the
              unconditional love of a pet. Whatever you and your furr babies are
              into, we're into it too. And we've got your back. Anytime.
              Anywhere. ThePetNest donates a portion of every service to Pet
              NGO's & Rescue shelters through this program. We also provide
              meals to shelter dogs in India.
            </h3>
          </p>
        </div>
        <div className="Contact">
          <h3>CONTACT</h3>
          <p>
            <h2>Let's get you some help!</h2>
            <i>Call us at:</i>
            <br />
            1234567890
            <br />
            <i>
              {" "}
              Email us at
              <br />
            </i>
            support@theproject.com
            <br />
            <i>
              {" "}
              Postal address:
              <br />
            </i>
            BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008
            <br />
          </p>
          <p>
            For further details{" "}
            <a href="https://gifographics.co/wp-content/uploads/2017/01/contact-us.gif">
              Contact us
            </a>
            . We look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
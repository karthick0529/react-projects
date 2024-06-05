import { AddColor } from "./AddColor";
import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom"
import { MovieList } from "./components/MovieList";
import { Home } from "./components/Home";

export const INITIAL_MOVIE_LIST = [
  {
    name: "Brigerton",
    poster: "http://image.tmdb.org/t/p/original//luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
    rating: 4,
    trailer: "https://youtu.be/gpv7ayf_tyE",
    summary: "Bridgerton follows Daphne Bridgerton (Phoebe Dynevor), the eldest daughter of the powerful Bridgerton family as she makes her debut onto Regency London's competitive marriage market. Hoping to follow in her parent's footsteps and find Link match sparked by true love, Daphne's prospects initially seem to be unrivaled.",
    cast: {
      actor: "Nicola Coughlan",
      actress: "Claudia Jessie"
    },
    duration: "60min"
  },
  {
    name: "Lucifer",
    poster: "http://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    rating: 4.7,
    trailer: "https://youtu.be/X4bF_quwNtw",
    summary: "Lucifer Morningstar (Tom Ellis) is the devil. He's tired of Hell and takes Link break in L.A. He's running his nightclub Lux with demon disciple Mazikeen (Lesley-Ann Brandt). His brother Amenadiel (D.B. Woodside) demands that he returns to Hell.",
    cast: {
      actor: "Tom Ellis",
      actress: "Lauren German"
    },
    duration: "100min"
  },
  {
    name: "Journey 2",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Journey_2_Poster.jpg",
    rating: 5.7,
    trailer: "https://www.youtube.com/watch?v=Q2JMEKIf5VU",
    summary: "Now 17, Sean Anderson (Josh Hutcherson) receives a coded distress signal from an island where none should exist. Knowing that he will not be able to dissuade Sean from tracking the signal to its source, Hank (Dwayne Johnson), Sean's new stepfather, joins the teen on a quest to the South Pacific. Together with helicopter pilot Gabato (Luis Guzmán) and Gabato's feisty daughter, Kailani (Vanessa Hudgens), they set out to find the island and rescue its sole human inhabitant (Michael Caine).",
    cast: {
      actor: "Dwayne Johnson",
      actress: "Vanessa Hudgens"
    },
    duration: "95min"
  },
  {
    name: "Jurassic World",
    poster: "https://picfiles.alphacoders.com/459/459865.jpg",
    rating: 6.1,
    trailer: "https://www.youtube.com/watch?v=vn9mMeWcgoM",
    summary: "Three years after the destruction of the Jurassic World theme park, Owen Grady and Claire Dearing return to the island of Isla Nublar to save the remaining dinosaurs from a volcano that's about to erupt. They soon encounter terrifying new breeds of gigantic dinosaurs, while uncovering a conspiracy that threatens the entire planet.",
    cast: {
      actor: "Chris Pratt",
      actress: "TBryce Dallas Howard"
    },
    duration: "130min"
  },
  {
    name: "Sonic the Hedgehog 2",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIG-G9rwGzGb6aVgZsXbXT5yx554zeno4MwA&s",
    rating: 6.5,
    trailer: "https://www.youtube.com/watch?v=1m-scl4rBgY",
    summary: "After settling in Green Hills, Sonic is eager to prove that he has what it takes to be a true hero. His test comes when Dr. Robotnik returns with a new partner, Knuckles, in search of a mystical emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    cast: {
      actor: "Ben Schwartz",
      actress: "Tika Sumpter"
    },
    duration: "110min"
  },
  {
    name: "JMadame Web",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Madame_Web_%28film%29_poster.jpg/220px-Madame_Web_%28film%29_poster.jpg",
    rating: 3.9,
    trailer: "https://www.youtube.com/watch?v=D9sPaHgCWkw",
    summary: "Cassandra Webb is a New York City paramedic who starts to show signs of clairvoyance. Forced to confront revelations about her past, she must protect three young women from a mysterious adversary who wants them dead.",
    cast: {
      actor: "Tahar Rahim",
      actress: "Sydney Sweeney"
    },
    duration: "90min"
  },
  {
    name: "Center of the Earth",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/ad/Journey_to_the_Center_of_the_Earth_%28TV_miniseries%29_dvd_cover.jpg",
    rating: 5.8,
    trailer: "https://www.youtube.com/watch?v=GKq7QlNz3CA",
    summary: "What's the Story? In Jules Verne's JOURNEY TO THE CENTER OF THE EARTH, a geology professor, Otto Lidenbrock, and his nephew Axel discover and decode an ancient document that purports to show that a dormant volcano holds a secret entrance to a series of caverns leading to a subterranean world at the earth's center.",
    cast: {
      actor: "Brendan Fraser",
      actress: "Anita Briem"
    },
    duration: "90min"
  },
  {
    name: "Hellboy II",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/0b79c527738b06b0a77d4c968f77c54a7161a29086f65cc82dbd50ea740afee5._SX1080_FMjpg_.jpg",
    rating: 7,
    trailer: "https://www.youtube.com/watch?v=HMWQEi8vvto",
    summary: "Lucifer Morningstar (Tom Ellis) is the devil. He's tired of Hell and takes Link break in L.A. He's running his nightclub Lux with demon disciple Mazikeen (Lesley-Ann Brandt). His brother Amenadiel (D.B. Woodside) demands that he returns to Hell.",
    cast: {
      actor: "Ron Perlman",
      actress: "Selma Blair"
    },
    duration: "120min"
  },
  {
    name: "Arrival",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
    rating: 7.9,
    trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
    summary: "Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind.",
    cast: {
      actor: "Amy Adams",
      actress: "Jeremy Renner"
    },
    duration: "116min"
  },
  {
    name: "Mad Max: Fury Road",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    rating: 8.1,
    trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    summary: "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.",
    cast: {
      actor: "Tom Hardy",
      actress: "Charlize Theron"
    },
    duration: "120min"
  },
  {
    name: "Joker",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
    rating: 8.4,
    trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
    summary: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
    cast: {
      actor: "Joaquin Phoenix",
      actress: "Zazie Beetz"
    },
    duration: "122min"
  },
  {
    name: "Black Panther",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
    rating: 7.3,
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    summary: "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    cast: {
      actor: "Chadwick Boseman",
      actress: " Lupita Nyong'o"
    },
    duration: "134min"
  },
  {
    name: "Get Out",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
    rating: 7.7,
    trailer: "https://www.youtube.com/watch?v=sRfnevzM9kQ",
    summary: "Now that Chris and his girlfriend, Rose, have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway upstate with her parents, Missy and Dean. At first, Chris reads the family's overly accommodating behaviour as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries leads him to a truth that he never could have imagined.",
    cast: {
      actor: "Daniel Kaluuya",
      actress: "Allison Williams"
    },
    duration: "104min"
  },
  {
    name: "A Star Is Born",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/A_Star_is_Born.png",
    rating: 7.7,
    trailer: "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
    summary: "Seasoned musician Jackson Maine discovers -- and falls in love with -- struggling artist Ally. She has just about given up on her dream to make it big as a singer until Jackson coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jackson fights an ongoing battle with his own internal demons.",
    cast: {
      actor: "Bradley Cooper",
      actress: "Lady Gaga"
    },
    duration: "136min"
  },
  {
    name: "Gravity",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg",
    rating: 7.7,
    trailer: "https://www.youtube.com/watch?v=OiTiKOy59o4",
    summary: "Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney), helming his last flight before retirement. Then, during a routine space walk by the pair, disaster strikes: The shuttle is destroyed, leaving Ryan and Matt stranded in deep space with no link to Earth and no hope of rescue. As fear turns to panic, they realize that the only way home may be to venture further into space.",
    cast: {
      actor: "Sandra Bullock",
      actress: "George Clooney"
    },
    duration: "91min"
  },
  {
    name: "The Twilight Saga",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Twilight_%282008_film%29_poster.jpg",
    rating: 4.9,
    trailer: "https://www.youtube.com/watch?v=PQNLfo-SOR4",
    summary: "The series tells the story—fraught with danger, suspense, and searing passion—of teenager Bella Swan and her vampire boyfriend, Edward Cullen. Twilight introduces Bella as she moves to Washington state and meets Edward, who instantly falls for her even though he is a vampire.",
    cast: {
      actor: "Kristen Stewart",
      actress: "Robert Pattinson"
    },
    duration: "117min"
  },
  {
    name: "The Last Airbender",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Avatar_The_Last_Airbender_%282024_TV_series%29_poster.png/220px-Avatar_The_Last_Airbender_%282024_TV_series%29_poster.png",
    rating: 4.0,
    trailer: "https://www.youtube.com/watch?v=-egQ79OrYCs",
    summary: "The four nations of Air, Water, Earth and Fire lived in harmony until the Fire Nation declared war. A century later, there is still no end in sight to the destruction, then, an Avatar named Aang (Noah Ringer) discovers that he has the power to control the four elements. He joins forces with Katara (Nicola Peltz), a Waterbender, and her brother, Sokka, to restore balance and harmony to their world.",
    cast: {
      actor: "Noah Ringer",
      actress: "Nicola Peltz"
    },
    duration: "103min"
  },
  {
    name: "The Emoji Movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Emoji_Movie_film_poster.jpg",
    rating: 3.2,
    trailer: "https://www.youtube.com/watch?v=o_nfdzMhmrA",
    summary: "Hidden inside a smartphone, the bustling city of Textopolis is home to all emojis. Each emoji has only one facial expression, except for Gene, an exuberant emoji with multiple expressions. Determined to become like the other emojis, Gene enlists the help of his best friend Hi-5 and a notorious code breaker called Jailbreak. During their travels through the other apps, the three emojis discover a great danger that could threaten their phone's very existence.",
    cast: {
      actor: "T.J. Miller",
      actress: "James Corden"
    },
    duration: "86min"
  },
  {
    name: "Movie 43",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJhfMM_SPSlPWYZb4YX7PC1tG54xdfgJg6Q&s",
    rating: 6.0,
    trailer: "https://www.youtube.com/watch?v=4wxyy8Rcz4k",
    summary: "Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor that's capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero Blue Beetle.",
    cast: {
      actor: "Xolo Maridueña",
      actress: "Bruna Marquezine"
    },
    duration: "127min"
  },
  {
    name: "Knights of the Zodiac",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d8/Knights_of_the_Zodiac_poster.jpg",
    rating: 4.4,
    trailer: "https://www.youtube.com/watch?v=Q2JMEKIf5VU",
    summary: "When a headstrong street orphan unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess who was sent to watch over humanity.",
    cast: {
      actor: "Mackenyu",
      actress: "Famke Janssen"
    },
    duration: "102min"
  }
]


export default function App() {

  return (
    <div className="App">

      <header>
        <Home />
      </header>

      <nav>
        <ul>
          {/* Link change page without refresh */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">MovieList</Link></li>
          <li><Link to="/add-color">AddColor</Link></li>
          <li><Link to="/somewhere">Somewhere</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:movieid" element={<MovieDetails />} />
        <Route path="/add-color" element={<AddColor />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </div>
  );
  //JSX ends
}

function MovieDetails() {
  const { movieid } = useParams()
  return (
    <h1>Movies Detail Page - {movieid}</h1>
  )
}

function NotFoundPage() {
  return (
    <img src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif" alt="404" />
  )
}


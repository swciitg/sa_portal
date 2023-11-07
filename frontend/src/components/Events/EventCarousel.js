import Card from "./EventCard"
import Image from "next/image"
import {Splide,SplideSlide} from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css'
const props = [
    {
      id :1,
      title : "Dawyne1",
      icon : "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      image : "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      description : "1Card Descriptioncguwhcvhcascvjhxbsajashcvashjbashjcvashhwgdhqwdkjkdbjkwbdawbdhwbfheabfhdbhdbhdbffbcakfbakbakhbfeahfbehfbehbfhjebkfhebcjkabhjebcjhebfksbfhjebjhewbfejhwbcvdagcdbajhcashcvdbhcbjhcdbjc dsgjbcv"
    },
    {
      id :2,
      title : "Dawyne2",
      icon : "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      image : "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      description : "2Card Descriptioncguwhcvhcascvjhxbsajashcvashjbashjcvashhwgdhqwdkjkdbjkwbdawbdhwbfheabfhdbhdbhdbffbcakfbakbakhbfeahfbehfbehbfhjebkfhebcjkabhjebcjhebfksbfhjebjhewbfejhwbcvdagcdbajhcashcvdbhcbjhcdbjc dsgjbcv"
    },
    {
      id :3,
      title : "Dawyne3",
      icon : "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      image : "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      description : "3Card Descriptioncguwhcvhcascvjhxbsajashcvashjbashjcvashhwgdhqwdkjkdbjkwbdawbdhwbfheabfhdbhdbhdbffbcakfbakbakhbfeahfbehfbehbfhjebkfhebcjkabhjebcjhebfksbfhjebjhewbfejhwbcvdagcdbajhcashcvdbhcbjhcdbjc dsgjbcv"
    },
    {
      id :4,
      title : "Dawyne4",
      icon : "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      image : "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      description : "4Card Descriptioncguwhcvhcascvjhxbsajashcvashjbashjcvashhwgdhqwdkjkdbjkwbdawbdhwbfheabfhdbhdbhdbffbcakfbakbakhbfeahfbehfbehbfhjebkfhebcjkabhjebcjhebfksbfhjebjhewbfejhwbcvdagcdbajhcashcvdbhcbjhcdbjc dsgjbcv"
    },
  ]
const Carousel = () => {
    return (
        <>
        <Splide
            options={{
                fixedWidth:600,
                perMove: 1,
                autoplay: false,
                gap: 25,
                lazyLoad: "nearby",
                autowidth: true,
                autpheight: true,
                padding: {
                    right: 10,
                    left: 10
                }
            }}
        >
            {props.map((prop)=>{
                return (
                    <SplideSlide key={prop.id}>
                        <Card  image = {prop.image} title= {prop.title} icon={prop.icon} description={prop.description}  />
                    </SplideSlide>
                )
            })}
        </Splide>
        </>
    )
}

export default Carousel
// Carousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const data = [
    { id: 1, img: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHNob2VzfGVufDB8fDB8fHww" },
    { id: 2, img: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, img: "https://plus.unsplash.com/premium_photo-1670983858348-84276a682db7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxlYXRoZXIlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, img: "https://images.unsplash.com/photo-1608629601270-a0007becead3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGxlYXRoZXIlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" },
];

export default function Carousel() {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 3000 }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="slide">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

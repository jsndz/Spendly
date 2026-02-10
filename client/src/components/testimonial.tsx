import { testimonials } from '@/types/types';
import Container from './layout/container';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { Badge } from './ui/badge';

const Testimonial = () => {
    return (
        <section className="w-full bg-white">
          <div className=" flex items-center">
            <Container>
              <div className="flex flex-col w-full items-center text-center">
                <Badge className="text-black">Testimonial</Badge>
    
                <h1 className="text-5xl text-black mt-4">
                  Hear what people say about us 
                </h1>
               
              </div>
            </Container>
           
          </div>
    <AnimatedTestimonials testimonials={testimonials}></AnimatedTestimonials>
        </section>
      );
}

export default Testimonial
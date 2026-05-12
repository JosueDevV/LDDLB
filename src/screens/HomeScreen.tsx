import { Hero } from "../components/Home/Hero"
import { AboutSection } from "../components/Home/AboutSection"
import { MenuSection } from "../components/Home/MenuSection"
import { GallerySection } from "../components/Home/GallerySection"

export const HomeScreen = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <MenuSection />
            <GallerySection />
        </>
    )
}
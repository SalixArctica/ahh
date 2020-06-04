import React from "react"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Container from '../components/Container'
import Logo from '../../static/logo.png'


export default () => (
    <Layout>
        <Banner>
            <img width="600" alt="ahh logo" src={Logo} />
        </Banner>
        <Container> 
            <h1>Our Statement of Beleif</h1>
            <p>In view of the fact that many modern pagan religions claim to be revivals of ancient Germanic religions, and assert that their own practices are historically accurate or representative of ancient practices while ignoring the historical record regarding such practices, those of us who do strive to practice the Germanic religions as they are attested felt compelled to adopt this statement.</p>
            <p>This statement is solely intended to help distinguish actual historical heathenry, also called “Old Sid” or variations thereof, from those modern pagan religions that are merely inspired or influenced by the imagery and symbology of historical heathenry—such as Asatru or Wicca.</p>
            <p>As a brief disclaimer, let it be known that this statement is not intended as an attack on Asatru, Wicca, or any other movement. Asatru and Wicca both are fine religions, with much value of their own. However, they do not use the historically attested practices of traditional Heathen religions and deviate substantially from the old religions in both practice and belief. Accordingly, while we do not mean to insult or discount the validity of Asatru or Wicca in their own right, we absolutely deny any claims of such groups that they represent the living continuation of traditional heathen religion.</p>
            <p>This statement is simply intended to provide some form of common ground, so that historical heathen groups may define themselves by their general commitment to the practices and principles defined herein rather than being forced to define themselves in contrast to non-historical pagan groups.</p>
            <p>Some Old Sid groups may be stricter in their observances of these principles than others, or may apply these principles differently from others, but on the most basic level historical heathenry can be defined by a commitment to the following ideas:</p>
            <ol>
                <li>Modern observance of the Old Sid should comply with historically attested practices, and should only deviate from historically attested practices when there is a compelling reason.</li>
                <li>The Old Sid is a religious practice centered on worship and honor of the pre-Christian Germanic Gods and other important spirits. It is a religion, a culture, and a belief system, and Old Sid communities adhere to it as such. Ceremonies are not performed as mere historical reenactment.</li>
                <li>Old Sid communities reject the Wiccan Wheel of the Year as a model by which the dates of sacred ceremonies should be set. Old Sid ceremonies are dated in accordance with the cycles of the moon, as was done in ancient times, rather than by the solstices and equinoxes of the sun. Historical Heathens followed a lunisolar calendar.</li>
                <li>Old Sid communities recognize the practice of animal sacrifice in Blot as having a valid and important place in modern practice and strive to observe it inasmuch as it is legal and practical to do so under all relevant circumstances.</li>
                <li>Old Sid communities observe Sumble ceremony in accordance with historically attested examples of Sumble, rather than in the Sabbat-style Sumble often used among modern pagan groups.</li>
                <li>Old Sid communities do not use the Old Sid to further modern racial or political agendas. Old Sid is tribal and communal in its focus, rather than racial. Old Sid communities reject all forms of bigotry outright.</li>
                <li>Old Sid communities understand that we are entitled to adopt new traditions where such things do not conflict with fundamental historically attested practices. Tradition is adaptive, and a commitment to historicity is not a commitment to stagnancy.</li>
                <li>Old Sid communities share a commitment to academic honesty and integrity. Accordingly, where Old Sid communities have developed new practices or traditions of their own, or where they have deviated from historically attested practices for compelling reasons, Old Sid communities should not present such new practices as representative of historical practice and should be forward with the truth regarding such new practices.</li>
            </ol>
            <p>The Association for Historical Heathenry is a loose confederation of heathen families, communities, and formal organizations. We are bound together by our shared commitment to observing the Old Sid in general accordance with the ideals expressed in this General Statement. We have come together in this Association for the purpose of divorcing historical heathenry from other forms of modern paganism. More importantly, we seek to further the growth and development of the Old Sid in the modern world by pulling like-minded heathens together and providing a forum in which they may network and share ideas.</p>
        </Container>
    </Layout>
)

import axios from 'axios';
import ResponsiveUserTable from "../components/ResponsiveUserTable";
import Header from '../components/header';
import Content from '../components/Content';
import Video from '../components/Vidio';
import Footer from "../components/footer";

export async function getStaticProps() {
    let data = {};


    try {
        const response = await axios.get('http://wordchat/wordpress/wp-json/acf/v3/pages/15');
        data = response.data;
        console.log(data)
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }

    return {
        props: {
            data,
        },
        revalidate: 1, // Optional: re-generate the page every 1 second if there's a request
    };
}

export default function Home({ data }) {
    // The data is logged in the browser console


    return (
        <>
            <Header />
            <div className="container">
                <Content
                    title="embed RK1K2bCg4J8"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa deserunt dignissimos enim ?"
                    link="https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s"
                />
                <Video videoId="RK1K2bCg4J8" />
            </div>

            {/* Рендер компонента ResponsiveUserTable */}

            <ResponsiveUserTable users={data.acf.users} />
            <Footer />
        </>

    );
}

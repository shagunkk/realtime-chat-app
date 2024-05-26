// import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
	return (
		<div className='flex h-screen'>
			<Sidebar />
			<MessageContainer className='flex-grow' />
		</div>
	);
};
export default Home;
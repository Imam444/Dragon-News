import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
      <div>
        <div className="p-4 space-y-4 mb-6">
          <h2 className="text-2xl">Login With</h2>
          <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
            Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
            GitHub
          </button>
        </div>
        <div className="p-4 mb-6">
          <h2 className="text-2xl mb-4">Find US on</h2>
          <a className="p-4 flex text-lg items-center border -x" href="">
            <FaFacebook className="mr-2"></FaFacebook>
            <span> Facebook</span>
          </a>
          <a
            className="p-4 flex text-lg items-center border rounded-t-lg"
            href=""
          >
            <FaTwitter className="mr-2"></FaTwitter>
            <span>Twitter</span>
          </a>
          <a
            className="p-4 flex text-lg items-center border rounded-t-lg"
            href=""
          >
            <FaInstagram className="mr-2"></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>
        {/* Q Zone */}
        <div className="p-4 space-y-4 mb-6">
                <h2 className="text-2xl">Q Zone</h2>
                <img src= {qZone1} alt="" />
                <img src= {qZone2} alt="" />
                <img src= {qZone3} alt="" />
          
        </div>
      </div>
    );
};

export default RightSideNav;

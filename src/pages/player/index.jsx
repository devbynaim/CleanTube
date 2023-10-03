import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";
import YouTube from "react-youtube";
import VideoCard from "../../components/shared/VideoCard";
import { useState } from "react";

const HomeWrapper = styled.div`
  flex-direction: column;
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  /* min-height:72vh; */
`;
const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  min-height: 100vh;
  overflow: hidden;
  margin: 15px 0;
  background-color: white;
`;
const LeftSide = styled.div`
  width: 100%;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  width: 97%;
  margin: auto;
  margin-top: 10px;
  /* background-color: tomato; */
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightSide = styled.div`
  min-width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow: scroll;
`;

const Title = styled.a`
  font-size: 16px;
  font-weight: bold;
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const ActionBtn = styled.button`
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  background-color: ${({ active }) => (active ? "#F2F2F2" : "white")};
  height: 35px;
  border-radius: 2px;
  box-shadow: none;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;
const Description = styled.p`
  display: block;
  font-size: 14px;
`;
const dummySkeleton = new Array(7).fill("skeleton");

const Player = () => {
  const [isNote, setIsNote] = useState(false);
  const opts = {
    height: "40vh",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const toggle = (action)=>{
    setIsNote(action)
  }

  return (
    <HomeWrapper>
      <Header />
      <Main className="container">
        <MainWrapper>
          <LeftSide>
            <YouTube videoId={"-YqUawjeToU"} opts={opts} />
            <VideoContainer>
              <Title>
                “ডিপ্রেশনে আছি”- এমন সবাইকেই যদি ভিডিওটি দেখানো যেত! |
                Depression | PODCAST | ISLAM ZONE
              </Title>
              <ActionContainer>
                <ActionBtn active={!isNote} onClick={()=>toggle(false)}>Description</ActionBtn>
                <ActionBtn active={isNote} onClick={()=>toggle(true)}>Notes</ActionBtn>
              </ActionContainer>
              {!isNote&&<Description>
                আজ তারুণ্যের চারপাশের পৃথিবী যেন বিরান মরু উপত্যকা। যেদিকে চোখ
                যায় শুধুই মরীচিকার হাতছানি। তার উপর অন্তহীন রুক্ষপ্রান্তর জুড়ে
                ছড়িয়ে রয়েছে বেশুমার অন্তর্ঘাতী চোরাবালি। ভাবলেই, কপাল সংকুচিত
                হয়ে আসে, রেখাগুলো গভীর হয়, একসময়ের দুনিয়া বদলে দেওয়া তারুণ্য আজ
                ফেঁসে গেছে শতশত ফিতনার অন্তর্জালে। তাদের জীবনীশক্তি পুরোপুরি
                কলুষিত হওয়ার পথে। তারুণ্যের সম্ভাবনার সকল দুয়ারে যেন ভেঙ্গে পড়ছে
                উহুদসম পাথুরে সব পাহাড়। এদিকে মাঝসাগরে প্রলয়ংকারী ঝড়ে পতিত
                বিশ্বমানবতার আর্তচিৎকারে আকাশ দ্বিখণ্ডিত হওয়ার উপক্রম। কবে? কবে
                জেগে উঠবে তারুণ্য? কবে বিশ্বমানবতাকে রক্ষা করতে নূহের নৌকার মত
                দিগন্তে উদ্ভাসিত হবে তারুণ্যের জাহাজগুলো! নিরাশা আর হতাশার
                অন্ধকারময় প্রান্তরে আশার বার্তা হল তারুণ্যেরই ছোট্ট একটি দল উঠে
                দাঁড়িয়েছে। তারা সংকল্পবদ্ধ হয়েছে দুর্গম মরুপ্রান্তরে তাদেরই আটকে
                পড়া ভাই-বোনদের উদ্ধার করে ফিরিয়ে আনবে সফলতার উদ্যানে। তারা
                অলরেডি ছোট ছোট কদমে শুরু করেছে- তাদের স্বপ্নের প্রকল্প ISLAM
                ZONE -একটি স্বপ্নময় মহাসড়ক। যে সড়ক ধরে পরিত্রাণের পথ খুঁজে নিতে
                পারে অন্ধকারের গোলকধাঁধায় ফেঁসে যাওয়া কোটি কোটি সম্ভাবনাময় তরুণ।
                ইসলামজোনের লক্ষ্যপূরনে সংখ্যায় ক্ষুদ্র হলেও আছে তারুণ্যের
                উদ্যমী, কঠোরপরিশ্রমী, প্রোডাক্টিভ, ক্রিয়েটিভ ও প্যাসনেট কিছু
                ভাইয়েরা। তাঁরা নিজেদের জীবনের মূল্যবান অধ্যায়কে উতসর্গ করেছে
                বটে, কিন্তু সামনে চ্যালেঞ্জ তো অনেক। সমস্যাগুলো দিন দিন বেড়েই
                চলেছে। আইডেন্টিটি ক্রাইসিস, এ*জি টিবি প্লাস, ড্রাগ, রেইপ,
                চাইল্ডএবিউজ, অশ্লীলতা, পর্ণগ্রাফি, haram relationship, lack of
                purpose, sadness, anxiety & depression... ( দীর্ঘশ্বাস)
                আলহামদুলিল্লাহ, আল্লাহর ﷻ দয়ায় ISLAM ZONE এই চ্যালেঞ্জগুলো সামনে
                নিয়ে এটির VISION & MISSION নির্ধারন করতে সক্ষম হয়েছে। . VISION
                ইসলামজোনের লক্ষ্য হল আন্তরিক ভালোবাসায় যত্নসহকারে যুবকদের মাঝে
                mentoring এবং guiding এর মাধ্যমে কাজ করা যাতে তারা এমন
                প্র্যক্টিসিং মুসলিমে পরিণত হতে পারে, যারা বিদ্যমান দুনিয়ার
                নাড়িনক্ষত্র সম্পর্কে ওয়াকিবহাল এবং কুরআন ও সুন্নাহর একনিষ্ঠ
                অনুসারী; ঠিকযেমন ছিলেন, প্রিয়নবীর ﷺ সাহাবারা, যারা দ্বীনের
                বার্তা বিশ্বব্যাপী ছড়িয়ে দিয়েছিলেন। . MISSION তরুণদের মাঝে তাদের
                জন্য সহজলভ্য, বন্দুত্বপূর্ণ ও উপযুক্ত পরিবেশে guiding, equipping
                and mentoring এর মাধ্যমে- - সঠিক আক্বীদা ও তাজকিয়া নিহিত
                দ্বীনের মজবুত ভিত্তি গড়ে তোলা। - স্কিলস ও ইন্টেলেক্ট ডেভেলপ
                করা। - শারীরিক সুস্থতা অর্জনের জন্য প্রশিক্ষণ ও উৎসাহ প্রদান
                করা। যাতে তারা জীবনের প্রতিটি ক্ষেত্রে নেতৃত্ব দিতে পারে এবং
                দ্বীন ও দুনিয়ার বিশুদ্ধ লেন্সে ভবিষ্যতের সঠিক পরিবর্তনের সূচনা
                করতে পারে। ISLAM ZONE -শুধুই একটি প্রকল্প নয়, এটি একটি স্বপ্ন।
                আলহামদুলিল্লাহ, ইসলামের এই দুর্দিনে এটি শুরু হয়েছে, ইনশাআল্লাহ,
                এটি সেদিনও থাকবে যেদিন প্রত্যেক কাঁচাপাকা ঘরে ইসলাম পৌঁছে যাবে।
              </Description>}
            </VideoContainer>
          </LeftSide>
          <RightSide>
            <VideoCard title="একজন ফেসবুক ইঞ্জিনিয়ারের রিজিউমি ......" />
            <VideoCard />
            <VideoCard />
            <VideoCard active />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </RightSide>
        </MainWrapper>
      </Main>
      <Footer />
    </HomeWrapper>
  );
};

export default Player;

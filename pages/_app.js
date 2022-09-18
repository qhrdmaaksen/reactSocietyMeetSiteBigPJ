import '../styles/globals.css';
import Layout from "../components/layout/Layout";

/*여기서 프로퍼티를 받고 구조 분해 할당을 해서 정보를 꺼냄, 꺼내는 정보는 Component 와 pageProps 임
NextJS가 자동으로 이 프로퍼티를 이 MyApp 컴포넌트로 보냄 NextJS가 이 특수 컴포넌트를 사용함
Component 는 렌더링 될 실제 페이지 콘텐츠를 저장하고 있는 프로퍼티임 그래서 페이지를 전환할 때마다 변함,
이 pageProps 는 페이지가 받는 특수 프로퍼티임*/
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

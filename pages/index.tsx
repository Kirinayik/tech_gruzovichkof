import MyWonderfulComponent from "../components/MyWonderfulComponent";
import {PageProps} from "../types/types";

function Page({text, id, count, color, data}:PageProps) {
  const options = {
    params: {
      fields: {
        isDynamic: () => void console.log('object'),
      }
    }
  }

  return (
    <MyWonderfulComponent text={text} id={id} options={options} count={count} color={color} data={data}>
      Im text from a component
    </MyWonderfulComponent>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/hello`)
  const {text} = await res.json()

  console.log(text)
  return { props: { text, color: 'red', count: 0, id: 'id', data: 'data' } }
}

export default Page;

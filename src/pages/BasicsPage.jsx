import ComponentsDemo from "../features/basics/ComponentsDemo";
import JSXExample from "../features/basics/JSXExample";
import PropsExample from "../features/basics/PropsExample";
import UseStateExample from "../features/basics/useStateExample";
import UseEffectExample from "../features/basics/useEffectExample";
import CardWrapper from "../components/CardWrapper";

function BasicsPage() {
  return (
    <div className="container mt-4">
      <h1 className="text-primary mb-4">React Basics</h1>

      <CardWrapper title="Components">
        <ComponentsDemo />
      </CardWrapper>

      <CardWrapper title="JSX">
        <JSXExample />
      </CardWrapper>

      <CardWrapper title="Props">
        <PropsExample />
      </CardWrapper>

      <CardWrapper title="useState">
        <UseStateExample />
      </CardWrapper>

      <CardWrapper title="useEffect">
        <UseEffectExample />
      </CardWrapper>
    </div>
  );
}

export default BasicsPage;

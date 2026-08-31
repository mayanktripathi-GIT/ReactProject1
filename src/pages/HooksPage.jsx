import UseRefExample from "../../src/features/hooks/useRefExample";
import UseMemoExample from "../features/hooks/useMemoExample";
import UseCallbackExample from "../features/hooks/useCallbackExample";
import CardWrapper from "../components/CardWrapper";

function HooksPage() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-success fw-bold">React Hooks</h1>

      <CardWrapper title="useRef">
        <UseRefExample />
      </CardWrapper>

      <CardWrapper title="useMemo">
        <UseMemoExample />
      </CardWrapper>

      <CardWrapper title="Usecallback">
        <UseCallbackExample />
      </CardWrapper>
    </div>
  );
}

export default HooksPage;

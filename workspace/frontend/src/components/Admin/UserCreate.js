import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export function UserCreate() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        교육생 등록
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        교육생의 정보를 입력해주세요.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Mobile" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Button className="mt-6" fullWidth>
          등 록 하 기
        </Button>
      </form>
    </Card>
  );
}
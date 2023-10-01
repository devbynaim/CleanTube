import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
const SkeletonDiv = styled.div`
  display: flex;
`;

const SkeletonItem = styled.div``;

const HomeSkeleton = () => {
  return (
    <SkeletonDiv>
      <SkeletonItem>
        <Skeleton
          variant="rectangular"
          width={245}
          height={135}
          style={{ borderRadius: "5px" }}
        />
        <Skeleton height={55} />
        <Skeleton height={20} width="70%" />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </SkeletonItem>
    </SkeletonDiv>
  );
};

export default HomeSkeleton;

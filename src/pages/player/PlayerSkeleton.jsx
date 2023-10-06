import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
const SkeletonDiv = styled.div`
  height: 100%;
  width: 100%;
`;



const PlayerSkeleton = () => {
  return (
    <SkeletonDiv>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={"100%"} 
          style={{ borderRadius: "5px" }}
          animation="wave"
        />
    </SkeletonDiv>
  );
};

export default PlayerSkeleton;

"use client";

import { AddCategory } from "@/components/AddCategory";
import { CreateFood } from "@/components/CreateFood";
import { Food } from "@/components/Food";
import { FoodType } from "@/components/Foods";

import { useFetch } from "@/hooks/useFetch";
import { DeleteOutline, EditOutlined, MoreVert } from "@mui/icons-material";
import {
  Container,
  Grid,
  Modal,
  Stack,
  Typography,
  experimentalStyled,
} from "@mui/material";
import { useEffect, useState } from "react";

export type CategoryStyleType = {
  categoryName: string;
  onClick: () => void;
  onClick2: () => void;
  clicked: boolean;
  sx: any;
};

export default function Admin() {
  const {
    datas: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch<CategoryStyleType[]>("http://localhost:3008/categories");

  const {
    datas: foodData,
    loading: foodLoading,
    error: foodError,
    refetch: foodRefetch,
  } = useFetch<FoodType[]>("http://localhost:3008/foods");

  const [active, setActive] = useState("Breakfast");

  useEffect(() => {}, []);

  const [clicked, setClicked] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ display: "flex", height: "fit-content" }}>
      <Stack width="25%" height="100%" paddingRight={3} gap={5}>
        <Typography fontSize="22px" fontWeight={700}>
          {"Food menu"}
        </Typography>
        <Stack gap="26px" marginBottom={3}>
          {categoryData.map((item, id) => {
            return (
              <CategoryStyle
                key={id}
                categoryName={item.categoryName}
                onClick={() => {
                  setActive(item.categoryName);
                }}
                onClick2={() => setClicked((prev) => !prev)}
                clicked={clicked}
                sx={{
                  background: `${
                    active === item.categoryName ? "#18BA51" : null
                  }`,
                  color: `${active === item.categoryName ? "#fff" : null}`,
                }}
              />
            );
          })}
          <AddCategory />
        </Stack>
      </Stack>
      <Stack
        width="75%"
        bgcolor="white"
        padding={2}
        sx={{ boxShadow: "8px 10px 30px 30px #F5F5F5 inset" }}
      >
        <Stack direction="row" justifyContent="space-between" py={2}>
          <Typography fontWeight={700} fontSize="22px">
            Breakfast
          </Typography>
          <CreateFood refetch={foodRefetch} />
        </Stack>
        <Stack>
          <Grid container spacing={2}>
            {foodData
              .filter((food) => food.categoryName === active)
              .map((food, index) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                    <Food {...food} onClick={() => {}} />
                  </Grid>
                );
              })}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}
function CategoryStyle(props: CategoryStyleType) {
  const { categoryName, onClick, sx, clicked, onClick2 } = props;

  return (
    <Stack
      direction="row"
      width="100%"
      border="solid 1px #D6D8DB"
      borderRadius={2}
      color="black"
      fontWeight={500}
      fontSize="18px"
      justifyContent={"space-between"}
      alignItems="center"
      px={2}
      py={1}
      onClick={onClick}
      sx={sx}
      position={"relative"}
    >
      {categoryName}
      <Stack bgcolor={"red"} onClick={onClick2}>
        <MoreVert />
        <Stack
          bgcolor={"white"}
          borderRadius={"8px"}
          overflow={"hidden"}
          zIndex={2}
          position={"absolute"}
          width={"250px"}
          boxShadow={"10px 10px 10px #F5F5F5"}
          border="1px #D6D8DB solid"
          style={{ display: `${clicked ? "flex" : "none"}` }}
        >
          <Stack
            color={"black"}
            direction={"row"}
            gap={2}
            py={"12px"}
            px={2}
            borderBottom={"1px #D6D8DB solid"}
          >
            <EditOutlined />
            {"Edit Name"}
          </Stack>
          <Stack color={"red"} direction={"row"} gap={2} py={"12px"} px={2}>
            <DeleteOutline />
            {"Delete Category"}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
// export const EditCategoryModal = () => {
//   return (
//     <>
//       <Stack></Stack>
//       {/* <Modal open={open} onClose={handleClose()}></Modal> */}
//     </>
//   );
// };

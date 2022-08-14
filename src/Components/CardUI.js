import React from "react";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import { Container } from "@mui/material";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";

const CardUI = (props) => {
  const deletefun = (newArr) => {
    props.onNewDelete(newArr);
  };
  return (
    <Container maxWidth="md">
      <div>
        {props.values.map((value) => {
          return (
            <div key={value.id}>
              <Grid container spacing={4} >
                <Grid item xs={8}>
                  <p style={{overflowWrap : 'anywhere' , hyphens: 'auto'}}>{value.name}</p>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup
                    variant="text"
                    aria-label="text button group"
                    style={{ float: "right" , color : 'black' }}
                  >
                    <Button style={{ float: "right" }}>
                      <UpdateButton val={value} />
                    </Button>
                    <Button style={{ float: "right" }}>
                      <DeleteButton
                        val={value}
                        arrs={props.values}
                        onDeleteArr={deletefun}
                      />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default CardUI;
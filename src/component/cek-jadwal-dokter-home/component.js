import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import JadwalIcon from "../../assets/cek-jadwal.png";

function CekJadwalDokterHome(props) {
  const { classes } = props;
  return (
    <Grid className={classes.card}>
      <Grid container spacing={0} className={classes.gridCard}>
        <Grid item xs={4} className={classes.gridLeft}>
          <img src={JadwalIcon} alt="cek jadwal dokter" />
        </Grid>
        <Grid item xs={8} className={classes.gridRight}>
          <Link className={classes.textRight} to="/cek-jadwal-dokter">
            Cek Jadwal Dokter
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CekJadwalDokterHome;
import "./index.css";

import React, { FC, MouseEvent } from "react";
import ReactDOM from "react-dom";

const code = `
defaults nosave


# version
# Betaflight / SPEEDYBEEF405V3 (SBF4) 4.3.2 Apr  7 2023 / 03:15:27 (f156481e9) MSP API: 1.44

# start the command batch
batch start

# reset configuration to default settings
defaults nosave

board_name SPEEDYBEEF405V3
mcu_id 001e00333532471138343131
signature 

# name: SDUA 666

# feature
feature -TELEMETRY
feature ESC_SENSOR

# serial
serial 0 2048 115200 57600 0 115200
serial 1 0 115200 57600 0 115200
serial 5 64 115200 57600 0 115200

# beeper
beeper -GPS_STATUS
beeper -ON_USB

# beacon
beacon RX_LOST
beacon RX_SET

# aux
aux 0 0 0 1700 2100 0 0
aux 1 1 1 900 1300 0 0
aux 2 2 1 1300 1700 0 0
aux 3 13 5 1700 2100 0 0
aux 4 26 3 1900 2100 0 0

# vtxtable
vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B CUSTOM  5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable powerlevels 4
vtxtable powervalues 14 27 30 34
vtxtable powerlabels 25 500 1W MAX

# vtx
vtx 0 2 0 0 1 950 1050
vtx 1 2 0 0 2 1450 1550
vtx 2 2 0 0 4 1950 2050

# master
set gyro_lpf1_static_hz = 0
set gyro_lpf2_static_hz = 300
set dyn_notch_q = 500
set dyn_notch_min_hz = 120
set dyn_notch_max_hz = 400
set gyro_lpf1_dyn_min_hz = 0
set gyro_lpf1_dyn_max_hz = 400
set acc_calibration = -8,-17,11,1
set mag_hardware = NONE
set rc_smoothing_auto_factor = 35
set rc_smoothing_auto_factor_throttle = 28
set rc_smoothing_setpoint_cutoff = 12
set rc_smoothing_feedforward_cutoff = 12
set rc_smoothing_throttle_cutoff = 20
set serialrx_provider = CRSF
set blackbox_sample_rate = 1/2
set dshot_bidir = ON
set motor_pwm_protocol = DSHOT300
set beeper_dshot_beacon_tone = 4
set yaw_motors_reversed = ON
set small_angle = 180
set simplified_gyro_filter_multiplier = 60
set osd_warn_no_gps_rescue = OFF
set osd_warn_gps_rescue_disabled = OFF
set osd_warn_rssi = ON
set osd_warn_link_quality = ON
set osd_vbat_pos = 2519
set osd_rssi_pos = 2497
set osd_link_quality_pos = 2465
set osd_rssi_dbm_pos = 2433
set osd_flymode_pos = 2391
set osd_vtx_channel_pos = 2506
set osd_current_pos = 2454
set osd_mah_drawn_pos = 2136
set osd_craft_name_pos = 14369
set osd_altitude_pos = 2102
set osd_warnings_pos = 14761
set osd_avg_cell_voltage_pos = 2487
set osd_battery_usage_pos = 32825
set debug_mode = GYRO_SCALED
set vtx_band = 3
set vtx_channel = 3
set vtx_power = 1
set vtx_low_power_disarm = UNTIL_FIRST_ARM
set vtx_freq = 5665
set vcd_video_system = PAL
set name = SDUA 666

profile 0

# profile 0
set dterm_lpf1_dyn_min_hz = 52
set dterm_lpf1_dyn_max_hz = 105
set dterm_lpf1_type = BIQUAD
set dterm_lpf1_static_hz = 52
set dterm_lpf2_static_hz = 0
set yaw_lowpass_hz = 90
set d_pitch = 41
set d_roll = 36
set d_min_roll = 27
set d_min_pitch = 30
set feedforward_smooth_factor = 20
set feedforward_jitter_factor = 15
set feedforward_boost = 5
set simplified_d_gain = 90
set simplified_dterm_filter_multiplier = 70

profile 1

profile 2

# restore original profile selection
profile 0

rateprofile 0

# rateprofile 0
set roll_expo = 33
set pitch_expo = 33
set yaw_expo = 33
set yaw_srate = 60

rateprofile 1

rateprofile 2

rateprofile 3

rateprofile 4

rateprofile 5

# restore original rateprofile selection
rateprofile 0

# save configuration
`;

const App: FC = () => {
  const handleGenerateClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "BTFL_cli_backup_SDUA_666_2023_11_29_UART6_RX.txt";
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  return (
    <main className="min-h-full flex flex-row justify-center py-20">
      <div className="p-4 w-full max-w-6xl space-y-4">
        <h1 className="text-4xl font-extrabold">Preset Generator</h1>
        <div className="relative space-x-4 flex flex-row">
          <div className="w-full">
            <div className="w-full">
              <label className="label text-sm font-semibold">Camera</label>
              <div className="form-control">
                <label className="label text-sm font-semibold cursor-pointer">
                  <input
                    className="radio radio-primary"
                    type="radio"
                    name="UART6"
                    checked
                    value="UART6"
                  />
                  <span className="label-text flex-1 ml-2">UART6</span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-4">
            <div className="card w-full bg-base-200 p-4">
              <pre className="max-h-[300px] text-xs overflow-scroll">
                {code}
              </pre>
            </div>
            <div className="flex flex-row-reverse">
              <button className="btn btn-primary" onClick={handleGenerateClick}>
                Завантажити
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

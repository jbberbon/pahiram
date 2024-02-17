import CustomModal from "../../../Components/CustomModal/CustomModal";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import BreakpointVariables from "../../../Utils/Theming/BreakpointVariables";
import ColorVariables from "../../../Utils/Theming/ColorVariables";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import "./FullCalendar.css";
import { useState } from "react";
import { Button } from "@mui/material";

function DateSelectorModal({
  isModalOpen,
  setModalOpen,
  setStartDate,
  setEndDate,
  bookedDates,
  activeItemCount,
  modelName,
}) {
  console.log("Booked Dates", bookedDates);
  const { isCustom420 } = BreakpointVariables();
  const { primaryMain, secondaryMain } = ColorVariables();

  const [newEvent, setNewEvent] = useState({});

  const handleDateSelect = (info) => {
    console.log("Handle Select Date", info);
    const origStartDateStr = new Date(info.startStr);
    const origEndDateStr = new Date(info.endStr);

    origStartDateStr.setMinutes(
      origStartDateStr.getMinutes() - origStartDateStr.getTimezoneOffset()
    );
    origEndDateStr.setMinutes(
      origEndDateStr.getMinutes() - origEndDateStr.getTimezoneOffset()
    );

    const formattedStartDate = origStartDateStr.toISOString().slice(0, 16);
    const formattedEndDate = origEndDateStr.toISOString().slice(0, 16);

    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);

    setNewEvent({
      start: formattedStartDate,
      end: formattedEndDate,
    });
  };

  return (
    <>
      <CustomModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        desktopWidth={"80%"}
      >
        <section
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: isCustom420 ? "8px" : "16px",
            padding: "16px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: isCustom420 ? "column" : "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: isCustom420 ? "1.2rem" : "1.5rem",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  color: primaryMain,
                  maxWidth: "80%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {modelName}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                }}
              >
                Only {activeItemCount} {activeItemCount <= 1 ? "is" : "are"}{" "}
                circulated
              </p>
            </div>
          </div>

          <Divider />

          <FullCalendar
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              start: "prev,next",
              center: "title",
              end: "timeGridWeek,timeGridDay",
            }}
            // buttonText={{
            //   listWeek: "List Week",
            //   listDay: "List Day",
            // }}
            // views={["dayGridWeek", "dayGridDay", "listWeek"]}
            initialView="timeGridWeek"
            views={["dayGridWeek", "dayGridDay"]}
            hiddenDays={[0]} // Sunday Hidden
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            displayEventEnd="true"
            allDaySlot={false}
            validRange={() => {
              const nowDate = new Date();
              const nextTwoMonthsDate = new Date(nowDate);
              const localNowDate = new Date(
                nowDate.toLocaleString("en-US", { timeZone: "Asia/Manila" })
              );
              return {
                start: localNowDate,
                end: nextTwoMonthsDate.setMonth(
                  nextTwoMonthsDate.getMonth() + 2
                ),
              };
            }}
            select={handleDateSelect}
            events={[...bookedDates, { title: "Chosen Date", ...newEvent, color: '#e7b426' }]}
            slotMinTime={"07:30:00"}
            slotMaxTime={"17:30:00"}
            nextDayThreshold={"09:00:00"}
            businessHours={[
              {
                // AM
                daysOfWeek: [1, 2, 3, 4, 5, 6],
                startTime: "7:30",
                endTime: "12:00",
              },
              {
                // PM
                daysOfWeek: [1, 2, 3, 4, 5, 6],
                startTime: "13:00", // 1pm
                endTime: "18:00", // 6pm
              },
            ]}
            contentHeight={"auto"}
            height={"parent"}
            // selectConstraint={"businessHours"}
            eventBackgroundColor={secondaryMain}
          />
          <Button variant="contained" color="secondary" onClick={setModalOpen}>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: "0.75rem",
                fontWeight: "600",
              }}
            >
              Done
            </p>
          </Button>
        </section>
      </CustomModal>
    </>
  );
}

DateSelectorModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
  bookedDates: PropTypes.array,
  activeItemCount: PropTypes.number,
  modelName: PropTypes.string,
  // availableQuantity: PropTypes.number.isRequired,
};

export default DateSelectorModal;

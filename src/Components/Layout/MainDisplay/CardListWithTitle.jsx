import CircularProgress from "@mui/material/CircularProgress";
import PageTitle from "../../Text/PageTitle";
import PropTypes from "prop-types";
import TransactionItemCard from "../../ItemCard/TransactionItemCard";

const CardListWithTitle = ({
  sectionTitle,
  list,
  isLoading,
  fetchItemFunction,
  setIsModalOpen,
}) => {
  return (
    <>
      <PageTitle fontSize={"1.2rem"}>{sectionTitle}</PageTitle>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {list.length > 0 &&
              list.map((request) => (
                <TransactionItemCard
                  key={request?.id}
                  transacData={request}
                  onClickCard={() => {
                    fetchItemFunction(request?.id);
                    setIsModalOpen(true);
                  }}
                />
              ))}
            {list.length === 0 && (
              <p style={{ width: "100%", textAlign: "center" }}>
                No requests found.
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
};

CardListWithTitle.propTypes = {
  list: PropTypes.array.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchItemFunction: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default CardListWithTitle;

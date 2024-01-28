import ErrorSnackbar from "../../../Components/Snackbars/ErrorSnackbar";
import useSearchItemModel from "../../../Hooks/SearchHooks/useSearchItemModel";
import ItemFormField from "./ItemFormField";

import PropTypes from "prop-types";

const ItemForm = ({
  control,
  fieldCount,
  subtractFieldCount,
  isOfficeSelected,
  setValue,
  selectedOffice,
}) => {
  // Custom hook for searching items
  const { results, loading, error, setError } = useSearchItemModel(
    selectedOffice,
    isOfficeSelected
  );

  return (
    isOfficeSelected && (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {[...Array(fieldCount).keys()].map((index) => (
          <ItemFormField
            key={index}
            control={control}
            index={index}
            isOfficeSelected={isOfficeSelected}
            results={results}
            loading={loading}
            setValue={setValue}
            subtractFieldCount={subtractFieldCount}
          />
        ))}
        <ErrorSnackbar error={error} setError={setError} />
        {/* <Button onClick={() => console.log(items)}>
          Reveal Endorser RHF Value
        </Button> */}
      </div>
    )
  );
};

ItemForm.propTypes = {
  control: PropTypes.object.isRequired,
  fieldCount: PropTypes.number.isRequired,
  subtractFieldCount: PropTypes.func.isRequired,
  isOfficeSelected: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  getValues: PropTypes.func.isRequired,
  selectedOffice: PropTypes.string,
  items: PropTypes.array,
};

export default ItemForm;

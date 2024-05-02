const modifyArrayData = (data) => {
  const result = data.reduce((acc, item) => {
    const { _id, ...rest } = item._doc;
    acc.push({
      id: item._id.toString(),
      ...rest
    });

    return acc;
  }, []);

  return result;
}


const modifyData = (data) => {
  const { _id, ...rest } = data._doc;
  return {
    id: data._id.toString(),
    ...rest
  };
}



export { modifyArrayData, modifyData };

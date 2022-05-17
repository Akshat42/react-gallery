function ImageGrid({ imageGridData, isLoading, hasError }) {
    function constructUrl(image) {
        return `https://live.staticflickr.com/${image.server}/${image.id}_${
            image.secret
        }_${'c'}.jpg`;
    }
    return (
        <div>
            {hasError ? alert(hasError) : null}
            {isLoading ? (
                <p className="flex flex-center">Loading...</p>
            ) : (
                <div>
                    <div className="pt-2 container mx-auto w-4/5 grid md:grid-cols-3 lg:grid-cols-4 gap-1">
                        {imageGridData.length > 0
                            ? imageGridData.map((image) => {
                                  return (
                                      <div
                                          key={image.id}
                                          className="flex flex-column rounded"
                                      >
                                          <img
                                              className="-full h-48 object-cover flex-1"
                                              src={constructUrl(image)}
                                              alt={image.title}
                                          />
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageGrid;

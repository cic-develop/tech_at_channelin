package keeper

import (
	"channelin/x/channelin/types"
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Plus(goCtx context.Context,  req *types.QueryPlusRequest) (*types.QueryPlusResponse, error) {
	if req == nil {
        return nil, status.Error(codes.InvalidArgument, "invalid request")
    }

	ctx := sdk.UnwrapSDKContext(goCtx)

    // TODO: Process the query
    _ = ctx

	return &types.QueryPlusResponse{Number: fmt.Sprintf("your number is %s!", req.Number)}, nil
}

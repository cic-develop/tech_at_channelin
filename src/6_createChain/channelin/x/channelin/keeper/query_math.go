package keeper

import (
	"context"
	"fmt"

	"channelin/x/channelin/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Math(goCtx context.Context, req *types.QueryMathRequest) (*types.QueryMathResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QueryMathResponse{Number: fmt.Sprintf("%d")}, nil
}

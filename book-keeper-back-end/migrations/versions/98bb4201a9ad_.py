"""empty message

Revision ID: 98bb4201a9ad
Revises: d771a2974978
Create Date: 2020-05-12 17:08:30.791378

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '98bb4201a9ad'
down_revision = 'd771a2974978'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('last_seen', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'last_seen')
    # ### end Alembic commands ###